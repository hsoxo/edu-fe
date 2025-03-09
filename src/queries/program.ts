import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { get, post, put, del } from "./base";
import { toast } from "sonner";

export interface Program {
  id: number;
  category: string;
  name: string;
  description: string;
  comment: string;
}

export interface CreateProgramDto {
  category: string;
  name: string;
  description: string;
  comment: string;
}

export interface UpdateProgramDto {
  id: number;
  category: string;
  name: string;
  description: string;
  comment: string;
}

// 添加错误类型定义
export interface ApiError {
  message: string;
}

// 查询键常量
export const programKeys = {
  all: ["programs"] as const,
  lists: () => [...programKeys.all, "list"] as const,
  detail: (id: number) => [...programKeys.all, "detail", id] as const,
};

// 查询 Hooks
export const usePrograms = () => {
  return useQuery({
    queryKey: programKeys.lists(),
    queryFn: () => get<{ items: Program[] }>("/api/programs"),
  });
};

export const useProgram = (id: number) => {
  return useQuery({
    queryKey: programKeys.detail(id),
    queryFn: () => get<Program>(`/api/programs/${id}`),
    enabled: !!id,
  });
};

// 修改 Hooks
export const useCreateProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProgramDto) =>
      post<CreateProgramDto, Program>("/api/programs", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: programKeys.lists() });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateProgramDto) =>
      put<Partial<CreateProgramDto>, Program>(`/api/programs/${data.id}`, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: programKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: programKeys.detail(data.id),
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => del(`/api/programs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: programKeys.lists() });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });
};
