import { Container } from "@mui/material";
import DataTableSection from "../components/DataTableSection";
import DepartmentsSection from "../components/DepartmentsSection";

const DataAndDepartmentPage = () => {
  return (
    <Container>
      <DataTableSection />
      <DepartmentsSection />
    </Container>
  );
};

export default DataAndDepartmentPage;
