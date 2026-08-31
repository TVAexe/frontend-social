import axios from 'axios';

// Khởi tạo instance với Base URL gọi đến Spring Boot Backend
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1',
  timeout: 10000, // Timeout 10s
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Gắn token vào header (Chuẩn bị cho Ngày 3)
axiosInstance.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage hoặc Zustand store
    // Đoạn này sẽ hoàn thiện khi làm tính năng Login
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Xử lý lỗi toàn cục
axiosInstance.interceptors.response.use(
  (response) => {
    // Trả về trực tiếp data từ response
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Bắt mã 401 Unauthorized (Dành cho logic Refresh Token của Dev B sau này)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // TODO: Gọi API refresh token ở đây
        // const newToken = await refreshToken();
        // localStorage.setItem('access_token', newToken);
        // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        // return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Nếu refresh thất bại, force logout
        if (typeof window !== 'undefined') {
          localStorage.removeItem('access_token');
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;