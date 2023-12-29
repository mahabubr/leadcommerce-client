"use client";
import { useGetAllEmployesQuery } from "@/redux/employees/employeesApi";
import { IParamState, IProps, queryData_init } from "./list.type";
import { useEffect, useState } from "react";
import { removeNullishValue } from "@/Helper/CommonFunction";

const useList = () => {
  const [queryData, setQueryData] = useState<IParamState>(queryData_init);
  const [sbumitToQuery, setSubmitToQuery] =
    useState<IParamState>(queryData_init);
  const { data, isLoading }: any = useGetAllEmployesQuery(sbumitToQuery);
  const [total, setTotal] = useState(0);

  const paginationConfig = {
    pageSize: queryData.limit as number,
    total: total,
    pageSizeOptions: [2, 4, 6],
  };

  const onTableChange = (e: any) => {
    console.log(e, "onTableChange");
  };

  useEffect(() => {
    setTotal(data?.meta?.total || 0);
  }, [data?.meta?.total]);

  const handleOnChange = (e: any) => {
    setQueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setSubmitToQuery({ ...removeNullishValue(queryData) });
    }
  };
  return {
    data: data?.data,
    meta: data?.meta,
    isLoading,
    paginationConfig,
    onTableChange,
    handleOnChange,
    handleKeyDown,
  };
};

export default useList;
