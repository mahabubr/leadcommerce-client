import TransactionMainPage from "@/components/transaction/TransactionMainPage";

const page = ({ params }: { params: { transactionId: string } }) => {
  return <TransactionMainPage transactionId={params.transactionId} />;
};

export default page;
