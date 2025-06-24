import { AppSidebar } from "@/components/app-sidebar";
import { TitleBar } from "@/components/title-bar";
import { Separator } from "@/components/ui/separator";
import "@/styles/tailwind.css";
import React, { type FC } from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "@/components/navbar";

const App: FC = () => {
	return (
		<React.StrictMode>
			<main className="bg-background h-dvh w-dvw grid grid-cols-[200px_1px_1fr] grid-rows-[32px_1px_1fr]">
				<TitleBar />
				<Separator className="col-span-3" />
				<AppSidebar />
				<Separator orientation="vertical" />
				<div>
					<Navbar />
					<Separator />
				</div>
			</main>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
