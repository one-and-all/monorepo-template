"use client";

import "./date-picker.css";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DayPickerSingleProps } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/button/";
import { Calendar } from "@/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";

type DatePickerProps = DayPickerSingleProps;

export function DatePicker({ className, ...props }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("date-picker-trigger", className)}
        >
          {props.selected ? (
            format(props.selected, "yyyy-MM-dd")
          ) : (
            <span>날짜 선택</span>
          )}
          <CalendarIcon className="!size-[1.6rem]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar initialFocus classNames={{ cell: "rounded-md" }} {...props} />
      </PopoverContent>
    </Popover>
  );
}
