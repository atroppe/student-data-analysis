import React, { FC } from 'react';
import { StudentByIdReportWrapper } from './StudentByIdReport.styled';

interface StudentByIdReportProps {}

const StudentByIdReport: FC<StudentByIdReportProps> = () => (
 <StudentByIdReportWrapper data-testid="StudentByIdReport">
    StudentByIdReport Component
 </StudentByIdReportWrapper>
);

export default StudentByIdReport;
