"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const AuthModal = (props: Props) => {
  const { session } = useSessionContext();
  const supabaseClient = useSupabaseClient();
  const { isOpen, onClose } = useAuthModal();
  const router = useRouter();
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal
      title="Welcome back"
      description="This is Auth Login"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        supabaseClient={supabaseClient}
        magicLink
        providers={["github"]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
