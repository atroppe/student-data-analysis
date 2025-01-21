import React, { FC } from 'react';
import { DataTableWrapper } from './DataTable.styled';

interface DataTableProps {}

const DataTable: FC<DataTableProps> = () => (
 <DataTableWrapper data-testid="DataTable">
    DataTable Component
 </DataTableWrapper>
);

export default DataTable;
