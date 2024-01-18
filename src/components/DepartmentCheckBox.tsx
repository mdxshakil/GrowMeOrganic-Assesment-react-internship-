import { AccordionSummary, Checkbox, FormControlLabel } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { capitalizeWord } from "../utils/capitalize";
import { ICheckedState } from "../interfaces";

interface IProps {
  department: string;
  subDepartments: string[];
  handleDepartmentCheck: (
    department: string,
    sub_departments: string[]
  ) => void;
  checked: ICheckedState[];
}

const DepartmentCheckBox = ({
  department,
  subDepartments,
  handleDepartmentCheck,
  checked,
}: IProps) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{ flexDirection: "row-reverse", gap: "12px" }}
    >
      <FormControlLabel
        label={`${capitalizeWord(department)} - (${subDepartments.length})`}
        control={
          <Checkbox
            color="default"
            onChange={() => handleDepartmentCheck(department, subDepartments)}
            checked={
              !!checked.find(
                (item) =>
                  item.department === department &&
                  item.subDepartments.length === subDepartments.length
              )
            }
          />
        }
      />
    </AccordionSummary>
  );
};

export default DepartmentCheckBox;
