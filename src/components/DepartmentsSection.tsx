import Box from "@mui/material/Box";
import departmentsData from "../db/db.json";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import DepartmentCheckBox from "./DepartmentCheckBox";
import { ICheckedState } from "../interfaces";
import SubDepartmentCheckBox from "./SubDepartmentCheckBox";

function DepartmentsSection() {
  const [checked, setChecked] = useState<ICheckedState[]>([]);

  const handleDepartmentCheck = (
    department: string,
    subDepartments: string[]
  ) => {
    const isExists = checked?.find(
      (item) =>
        item.department === department &&
        item.subDepartments.length === subDepartments.length
    );
    if (!isExists) {
      setChecked((prevChecked) => [
        ...(prevChecked ?? []),
        { department, subDepartments },
      ]);
    } else {
      setChecked(
        (prevChecked) =>
          prevChecked?.filter((item) => item.department !== department) ?? []
      );
    }
  };

  const handleSubDepartmentChange = (
    department: string,
    subDepartment?: string
  ) => {
    const selectedDepartment = checked?.find(
      (item) => item.department === department
    );

    if (!selectedDepartment) {
      // If the department doesn't exist, add it with the new subDepartment
      setChecked([
        ...(checked as ICheckedState[]),
        { department, subDepartments: [subDepartment as string] },
      ]);
    } else {
      // If the department exists, check if subDepartment already exists or not. If subDepartment exists then remove it otherwise add it.
      const updatedSubDepartments = checked.map((item) => {
        if (item.department === department) {
          if (item.subDepartments.includes(subDepartment as string)) {
            // If subDepartment exists, remove it
            return {
              ...item,
              subDepartments: item.subDepartments.filter(
                (subDept) => subDept !== subDepartment
              ),
            };
          } else {
            // If subDepartment doesn't exist, add it
            return {
              ...item,
              subDepartments: [...item.subDepartments, subDepartment as string],
            };
          }
        } else {
          return item;
        }
      });

      setChecked(updatedSubDepartments);
    }
  };

  return (
    <Box sx={{ width: "350px", overflow: "hidden", py: 3 }}>
      <Typography variant="h5" fontWeight="bold" pt={3} pb={1}>
        Select Departments:
      </Typography>
      {/* render departments */}
      {departmentsData.map(({ department, sub_departments }) => (
        <Box key={department}>
          <Accordion style={{ background: "#0284C7" }}>
            <DepartmentCheckBox
              checked={checked}
              department={department}
              subDepartments={sub_departments}
              handleDepartmentCheck={handleDepartmentCheck}
            />
            <AccordionDetails>
              {/* render sub departments */}
              {
                <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                  {sub_departments?.map((subDepartment) => (
                    <SubDepartmentCheckBox
                      subDepartment={subDepartment}
                      department={department}
                      handleSubDepartmentChange={handleSubDepartmentChange}
                      checked={checked}
                    />
                  ))}
                </Box>
              }
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
}

export default DepartmentsSection;
