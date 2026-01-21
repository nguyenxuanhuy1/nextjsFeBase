import { Table, type TableProps, Pagination } from "antd";

interface ParamsPage {
  page: number;
  size: number;
}

interface CustomTableProps<RecordType> extends TableProps<RecordType> {
  paramsPage: ParamsPage;
  setParamPage: (page: ParamsPage) => void;
  total: number;
  setItemTarget?: (record: RecordType) => void;
  ShowPagination?: boolean;
}

const CustomTable = <RecordType extends object = any>({
  paramsPage,
  setParamPage,
  total,
  setItemTarget,
  ShowPagination = true,
  ...rest
}: CustomTableProps<RecordType>) => {
  return (
    <div>
      <Table
        className="custom-red-header"
        pagination={false}
        onRow={(record) => ({
          onClick: () => {
            setItemTarget?.(record);
          },
        })}
        {...rest}
      />
      {ShowPagination && (
        <div style={{ marginTop: 16, display: "flex", justifyContent: "end" }}>
          <Pagination
            current={paramsPage.page}
            pageSize={paramsPage.size}
            total={total}
            showSizeChanger
            pageSizeOptions={[10, 20, 50]}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} / ${total} bản ghi`
            }
            onChange={(page, pageSize) => {
              setParamPage({ page, size: pageSize });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomTable;
