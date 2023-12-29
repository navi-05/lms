"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const res = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(res.data.url);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="w-full md:w-auto"
      size={"sm"}
      onClick={onClick}
      disabled={isLoading}
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;