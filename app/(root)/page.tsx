"use client";

import { userStoreModel } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = userStoreModel((state) => state.onOpen);
  const isOpen = userStoreModel((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen,onOpen])

  return (
    <div className="p-4">
      Root Page
    </div>
  );
};

export default SetupPage;
