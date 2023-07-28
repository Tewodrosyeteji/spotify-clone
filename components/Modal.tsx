import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
type ModalProps = {
  isOpen: boolean;
  onChange: (value: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed border-neutral-700 border drop-shadow-md top-[50%] left-[50%] p-[25px] max-h-ful h-full w-full translate-x-[-50%] translate-y-[-50%] bg-neutral-800 rounded-md md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px] focus:outline-none">
          <Dialog.Title className="text-xl font-bold text-center mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-sm text-center mb-5 leading-normal">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] rounded-full items-center justify-center focus:outline-none appearance-none">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
