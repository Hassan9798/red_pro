import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoMdSearch } from "react-icons/io";

const GradeTable = () => {
  return (
    <div className="py-8 lg:py-12 w-full flex flex-col gap-8 text-lg">
        <div className="flex gap-3 items-center flex-wrap sm:flex-nowrap">
            <div className="flex-grow-0 shadow-md bg-white flex justify-center items-center p-2 h-10">
                <IoMdSearch />
            </div>
            <div className="flex-1 w-full">
                <input placeholder="Search Here" className="text-lg p-2 shadow-md h-10 min-w-64 w-full"/>
            </div>
            <div className="flex-grow-0">
                {/* drop down */}
                See All
            </div>
            <div className="flex-grow-0">
                Filters
            </div>
        </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>ACAI</TableHead>
            <TableHead>N/A</TableHead>
            <TableHead>N/A</TableHead>
            <TableHead>N/A</TableHead>
            <TableHead>N/A</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {grades.map((item, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <div className="bg-[#F3F3F3] text-black font-medium p-2 rounded-full flex justify-center items-center w-10 h-10">{(index + 1) > 9 ? (index + 1) : `0${(index + 1)}`}</div>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-green-500">{item.tag1}</TableCell>
                    <TableCell>{item.tag2}</TableCell>
                    <TableCell>{item.tag3}</TableCell>
                    <TableCell className="text-red-500">{item.tag4}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GradeTable;

const grades = [
    {
        id: '01',
        name: "Apple",
        tag1: "US EXTRA FANCY",
        tag2: "US FANCY",
        tag3: "US NO1",
        tag4: "US UTILITY",
    },
    {
        id: '02',
        name: "APRICOT",
        tag1: "NO.1",
        tag2: "NO.2",
        tag3: "",
        tag4: "",
    },
    {
        id: '01',
        name: "Apple",
        tag1: "US EXTRA FANCY",
        tag2: "US FANCY",
        tag3: "US NO1",
        tag4: "US UTILITY",
    },
    {
        id: '02',
        name: "APRICOT",
        tag1: "NO.1",
        tag2: "NO.2",
        tag3: "",
        tag4: "",
    },
    {
        id: '01',
        name: "Apple",
        tag1: "US EXTRA FANCY",
        tag2: "US FANCY",
        tag3: "US NO1",
        tag4: "US UTILITY",
    },
    {
        id: '02',
        name: "APRICOT",
        tag1: "NO.1",
        tag2: "NO.2",
        tag3: "",
        tag4: "",
    },
    {
        id: '01',
        name: "Apple",
        tag1: "US EXTRA FANCY",
        tag2: "US FANCY",
        tag3: "US NO1",
        tag4: "US UTILITY",
    },
    {
        id: '02',
        name: "APRICOT",
        tag1: "NO.1",
        tag2: "NO.2",
        tag3: "",
        tag4: "",
    },
    {
        id: '01',
        name: "Apple",
        tag1: "US EXTRA FANCY",
        tag2: "US FANCY",
        tag3: "US NO1",
        tag4: "US UTILITY",
    },
    {
        id: '02',
        name: "APRICOT",
        tag1: "NO.1",
        tag2: "NO.2",
        tag3: "",
        tag4: "",
    },
    {
        id: '01',
        name: "Apple",
        tag1: "US EXTRA FANCY",
        tag2: "US FANCY",
        tag3: "US NO1",
        tag4: "US UTILITY",
    },
    {
        id: '02',
        name: "APRICOT",
        tag1: "NO.1",
        tag2: "NO.2",
        tag3: "",
        tag4: "",
    },
]