import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, post, put, del } from "./base";
import { toast } from "sonner";

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  comment: string;
  age: number;
  sex: string;
  isActive: boolean;
}

export interface CreateStudentDto {
  name: string;
  email: string;
  phone: string;
  comment: string;
  age: number;
  sex: string;
}

export interface UpdateStudentDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  comment: string;
  age: number;
    sex: string;
}

// 添加错误类型定义
export interface ApiError {
  message: string;
}

// 查询键常量
export const studentKeys = {
  all: ["students"] as const,
  lists: () => [...studentKeys.all, "list"] as const,
  detail: (id: number) => [...studentKeys.all, "detail", id] as const,
};

// 查询 Hooks
export const useStudents = () => {
  return useQuery({
    queryKey: studentKeys.lists(),
    queryFn: () => get<{ items: Student[] }>("/api/students"),
  });
};

export const useStudent = (id: number) => {
  return useQuery({
    queryKey: studentKeys.detail(id),
    queryFn: () => get<Student>(`/api/students/${id}`),
    enabled: !!id,
  });
};

// 修改 Hooks
export const useCreateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateStudentDto) =>
      post<CreateStudentDto, Student>("/api/students", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studentKeys.lists() });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateStudentDto) =>
      put<Partial<CreateStudentDto>, Student>(`/api/students/${data.id}`, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: studentKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: studentKeys.detail(data.id),
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => del(`/api/students/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studentKeys.lists() });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });
};
