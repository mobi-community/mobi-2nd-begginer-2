import SingUpForm from "./components/Sign";
import MyToggle from "./components/Toggle";
import { Badge } from "src/components/ui/badge";
import { Calendar } from "src/components/ui/calendar";
import { useState } from "react";
import { ScrollArea } from "src/components/ui/scroll-area";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <SingUpForm />
      <MyToggle />
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </ScrollArea>
    </div>
  );
}

export default App;
