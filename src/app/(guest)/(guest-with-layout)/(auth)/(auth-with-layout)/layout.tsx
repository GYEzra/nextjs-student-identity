import { FormLayout } from "@/components/layouts";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormLayout>
      <div className="max-w-screen-xl min-w-[400px] m-0 sm:m-10 sm:rounded-lg flex flex-col justify-center flex-1">{children}</div>
    </FormLayout>
  );
};

export default AuthLayout;
