import CodeEditor from "@/components/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Compiler = () => {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">

            <CodeEditor/>

        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
        <div className="flex h-[calc(100dvh-60px)] items-center justify-center p-6 min-w-[35 0px]" >
            <span className="font-semibold">right</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Compiler;
