import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export const Guideline = () => {
  return (
    <div className="md:col-span-3">
      <div className="h-full bg-black rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col justify-between gap-6">
        <div className="text-white">
          <h2 className="text-xl text-center font-semibold mb-4">
            Continue with the onboarding process
          </h2>
          <div className="flex-1 h-full bg-white rounded-xl p-4 text-gray-800">
            <pre className="text-xs">
              <code>
                <span className="text-blue-500">class</span>{" "}
                <span className="text-yellow-500">Component</span>{" "}
                <span className="text-blue-500">extends</span>{" "}
                <span className="text-yellow-500">React.Component</span> {"{"}
                <br />
                <span className="text-blue-500"> constructor</span>() {"{"}
                <br />
                <span className="text-blue-500"> super</span>();
                <br />
                <span className="text-blue-500"> this</span>.
                <span className="text-purple-500">state</span> = {"{"}
                <span className="text-green-500">isOpen</span>:{" "}
                <span className="text-blue-500">true</span>
                {"}"}
                <br />
                <span> </span>
                <br />
                <br />
                <span className="text-blue-500"> render</span>() {"{"}
                <br />
                <span className="text-blue-500"> return</span> (
                <span className="text-green-500">...</span>);
                <br />
                <span> </span>
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>
        <Button
          className="w-full h-12 bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium transition-colors rounded-full"
          asChild
        >
          <NavLink to={"/trainee/onboarding"}>Continue</NavLink>
        </Button>
      </div>
    </div>
  );
};
