import BookkeepingSection from "./components/BookkeepingSection";
import ExpertSupport from "./components/ExperSupport";
import ExpertSupportRev from "./components/ExpertSupportRev";
import Partners from "./components/Partners";
import { data } from "./Data";
export default function App() {
  return (
    <>
      <BookkeepingSection />
      <ExpertSupport
        image={data.comp_1.img_1}
        heading={data.comp_1.heading_1}
        paragraph={data.comp_1.paragraph_1}
      />
      <ExpertSupportRev
        image={data.comp_2.img_2}
        heading={data.comp_2.heading_2}
        paragraph={data.comp_2.paragraph_2}
      />
      <ExpertSupport
        image={data.comp_3.img_3}
        heading={data.comp_3.heading_3}
        paragraph={data.comp_3.paragraph_3}
      />
      <ExpertSupportRev
        image={data.comp_4.img_4}
        heading={data.comp_4.heading_4}
        paragraph={data.comp_4.paragraph_4}
      />
      <Partners />
    </>
  );
}
