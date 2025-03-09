import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Program } from "./program";
import { Teacher } from "./teacher";

export enum Recurring {
  Daily = "daily",
  Weekly = "weekly",
  Weekdays = "weekdays",
  Weekends = "weekends",
  Monthly = "monthly",
  None = "none",
}

export interface Schedule {
  date: string;
  start_time: string;
  end_time: string;
  recurring: Recurring | null;
  recurring_end_date: string | null;
}

export interface Lesson {
  id: number;
  start_time: string;
  end_time: string;
}

export interface Course {
  id: number;
  program_id: number;
  teacher_id: number;
  program: Program;
  teacher: Teacher;
  comment: string;
  schedule: Schedule[];
  created_at: string;
  updated_at: string;
  lessons: Lesson[];
}

// 创建新课程的参数类型
export interface CreateCourseDto {
  program_id: number;
  teacher_id: number;
  comment: string;
  schedule: Schedule[];
}

// 更新课程的参数类型
export interface UpdateCourseDto {
  id: number;
  program_id: number;
  teacher_id: number;
  comment: string;
}

// 查询键常量
export const courseKeys = {
  all: ["courses"] as const,
  lists: () => [...courseKeys.all, "list"] as const,
  detail: (id: number) => [...courseKeys.all, "detail", id] as const,
};

// 获取课程列表
export const useGetCourses = () => {
  return useQuery({
    queryKey: courseKeys.lists(),
    queryFn: async () => {
      const { data } = await axios.get<{ items: Course[] }>("/api/courses");
      return data;
    },
  });
};

// 获取单个课程详情
export const useGetCourse = (id: number) => {
  return useQuery({
    queryKey: courseKeys.detail(id),
    queryFn: async () => {
      const { data } = await axios.get<Course>(`/api/courses/${id}`);
      return data;
    },
    enabled: !!id,
  });
};

// 创建课程
export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newCourse: CreateCourseDto) => {
      const { data } = await axios.post<Course>("/api/courses", newCourse);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: courseKeys.lists() });
    },
  });
};

// 更新课程
export const useUpdateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updateData }: UpdateCourseDto) => {
      const { data } = await axios.put<Course>(
        `/api/courses/${id}`,
        updateData
      );
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: courseKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: courseKeys.detail(variables.id),
      });
    },
  });
};

// 删除课程
export const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`/api/courses/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: courseKeys.lists() });
    },
  });
};
