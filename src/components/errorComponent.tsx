import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";

type errorProps = {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};
const ErrorComponent = ({ refetch }: errorProps) => {
  return (
    <div className="flex items-center justify-center min-h-[707px]">
      <Card className="p-2">
        <CardBody>
          <p className="text-xl flex gap-x-2 font-bold mb-4">
            Error: <p className="text-amber-400">Something went wrong.</p>
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
