import { useState } from "react";

import { Provider } from "react-redux";
import store from "./store/store";

import PuppyDetails from "./features/puppies/PuppyDetails";
import PuppyList from "./features/puppies/PuppyList";
import PuppyForm from "./features/puppies/PuppyForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState(null);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PuppyForm />
        <Routes>
          <Route
            path="/"
            element={<PuppyList setSelectedPuppyId={setSelectedPuppyId} />}
          />
          <Route
            path="/:id"
            element={
              <PuppyDetails
                selectedPuppyId={selectedPuppyId}
                setSelectedPuppyId={setSelectedPuppyId}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
