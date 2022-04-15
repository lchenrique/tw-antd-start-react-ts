import preview from "@/assets/preview/carbon.svg";
import { Button } from "antd";
import themeConfig from "./utils/utils";
function App() {
    return (
        <div className="flex justify-center items-center flex-col h-screen space-y-5 bg-dark-purple">
            <h1 className="text-4xl font-bold text-linen text-center ">
                Tailwind CSS - Ant-design - React - TypeScript
            </h1>
            <Button
                type="primary"
                className=" bg-teal-600 border-teal-600 text-white font-bold rounded-none "
            >
                Ant btn with a tailwind css styles
            </Button>
            <Button type="primary">Ant btn</Button>
            <Button
                type="primary"
                style={{
                    background: themeConfig.theme.colors["slate-blue"],
                    borderColor: themeConfig.theme.colors["slate-blue"],
                }}
            >
                Ant btn with a javascript variable colors
            </Button>

            <img src={preview} width={800} />
        </div>
    );
}

export default App;
