import { Routes, Route } from "react-router-dom";
import NoteList from "./pages/NoteList";
import NoteDetails from "./pages/NoteDetails";
import ArchivedNotes from "./pages/ArchivedNotes";
import NotFound from "./pages/NotFound";
import { NotesProvider } from "./utils/notes";

function App() {
  return (
    <NotesProvider>
      <div>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
          <Route path="/archived" element={<ArchivedNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </NotesProvider>
  );
}

export default App;
