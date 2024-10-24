import { Pokemon } from "@/types/types";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

type errorProps = {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pokemon>>;
};

const ErrorComponent = ({ refetch }: errorProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <Card className="p-2">
        <CardBody>
          <p className="text-xl flex gap-x-2 font-bold mb-4">
            Error: Something went wrong.
          </p>
          <Button onClick={() => refetch()} variant="flat" color="warning">
            Try Again
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ErrorComponent;
