import { useMutation } from 'react-query';
import createBelog from '../../services/Room/CreateLog/createBelog';

const useCreateBelog = () => {
  const mutation = useMutation(createBelog);

  return {
    create: mutation.mutate, // 비동기 요청
    isLoading: mutation.isLoading, // 로딩 상태
    isError: mutation.isError, // 에러 상태
    error: mutation.error, // 에러 객체
    isSuccess: mutation.isSuccess, // 성공 여부
  };
};

export default useCreateBelog;
