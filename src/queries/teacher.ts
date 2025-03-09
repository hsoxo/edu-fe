import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, post, put, del } from "./base";
import { toast } from "sonner";

export interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string;
  comment: string;
  isActive: boolean;
}

export interface CreateTeacherDto {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

export interface UpdateTeacherDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  comment: string;
}

// 添加错误类型定义
export interface ApiError {
  message: string;
}

// 查询键常量
export const teacherKeys = {
  all: ["teachers"] as const,
  lists: () => [...teacherKeys.all, "list"] as const,
  detail: (id: number) => [...teacherKeys.all, "detail", id] as const,
};

// 查询 Hooks
export const useTeachers = () => {
  return useQuery({
    queryKey: teacherKeys.lists(),
    queryFn: () => get<{ items: Teacher[] }>("/api/teachers"),
  });
};

export const useTeacher = (id: number) => {
  return useQuery({
    queryKey: teacherKeys.detail(id),
    queryFn: () => get<Teacher>(`/api/teachers/${id}`),
    enabled: !!id,
  });
};

// 修改 Hooks
export const useCreateTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateTeacherDto) =>
      post<CreateTeacherDto, Teacher>("/api/teachers", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teacherKeys.lists() });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateTeacherDto) =>
      put<Partial<CreateTeacherDto>, Teacher>(`/api/teachers/${data.id}`, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: teacherKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: teacherKeys.detail(data.id),
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteTeacher = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => del(`/api/teachers/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: teacherKeys.lists() });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });
};
