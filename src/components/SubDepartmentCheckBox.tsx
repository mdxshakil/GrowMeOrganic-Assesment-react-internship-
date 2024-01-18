import { Checkbox, FormControlLabel } from "@mui/material";
import { capitalizeWord } from "../utils/capitalize";
import { ICheckedState } from "../interfaces";

interface IProps {
  subDepartment: string;
  department: string;
  handleSubDepartmentChange: (
    department: string,
    subDepartment: string
  ) => void;
  checked: ICheckedState[];
}

const SubDepartmentCheckBox = ({
  subDepartment,
  department,
  handleSubDepartmentChange,
  checked,
}: IProps) => {
  return (
    <FormControlLabel
      key={subDepartment}
      sx={{ ml: "30px", my: 0 }}
      label={capitalizeWord(subDepartment)}
      control={
        <Checkbox
          color="default"
          onChange={() => handleSubDepartmentChange(department, subDepartment)}
          checked={
            !!checked?.find(
              (item) =>
                item.department === department &&
                item.subDepartments.includes(subDepartment)
            )
          }
        />
      }
    />
  );
};

export default SubDepartmentCheckBox;
