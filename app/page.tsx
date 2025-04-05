import {sessionData} from "@/app/sessionData";

export default async function Page() {
    const data = await sessionData()
    return (
        <div
            className="grid font-poppins grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {JSON.stringify(data)}
        </div>
    );
}
