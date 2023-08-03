"use client";

import { useState, useEffect } from "react";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import { toast } from "react-hot-toast";
import Button from "@/components/Button";

type Props = {};

const AccountContent = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const subscribeModal = useSubscribeModal();
  const router = useRouter();
  const { isLoading, user, subscription } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, router, user]);

  const rediretToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });

      if (error) {
        throw new Error("portal link problem");
      }

      window.location.assign(url);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
          <p>No active plan</p>
          <Button onClick={subscribeModal.onOpen} className="w-[300px]">
            Subscribe
          </Button>
        </div>
      )}

      {subscription && (
        <div className="flex flex-col gap-y-6">
          <p>
            You are currently on the{" "}
            <b>{subscription?.prices?.products?.name}</b> plan{" "}
          </p>
          <Button
            className="w-[300px]"
            disabled={loading || isLoading}
            onClick={rediretToCustomerPortal}
          >
            {" "}
            open customer portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
