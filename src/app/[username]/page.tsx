import { Button } from "../../components/ui/button";
import React from "react";

const page = ({
  params,
}: {
  params: {
    username: string;
  };
}) => {
  return (
    <div>
      <ul>
        <li>hiiii {params.username}</li>
        <Button asChild>
          <a href="/api/auth/logout">Logout</a>
        </Button>
      </ul>
    </div>
  );
};

export default page;
