import { AppSidebar } from "@/components/app-sidebar";
import "@/styles/tailwind.css";
import React, { type FC } from "react";
import ReactDOM from "react-dom/client";
import { TitleBar } from "./components/title-bar";

const App: FC = () => {
	return (
		<React.StrictMode>
			<main className="h-dvh w-dvw grid grid-cols-[200px_1fr] grid-rows-[32px_1fr]">
				<TitleBar />
				<AppSidebar />
				<div className="bg-muted"></div>
			</main>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
