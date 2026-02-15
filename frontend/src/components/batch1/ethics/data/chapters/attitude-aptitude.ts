import { ContentItem } from "../../../types";

export const attitudeAptitude: ContentItem = {
    id: "attitude-aptitude",
    title: "Attitude: Content, Structure, Function",
    readTime: "25 mins",
    sections: [
        {
            heading: "What is Attitude?",
            content: `
        <p class="mb-4">
          Attitude is a psychological tendency that is expressed by evaluating a particular entity with some degree of favor or disfavor.
        </p>
        <p class="mb-4">
          <strong>CAB Model:</strong>
          <br/>
          <strong>C</strong> - Cognitive (Beliefs/Thoughts)<br/>
          <strong>A</strong> - Affective (Feelings/Emotions)<br/>
          <strong>B</strong> - Behavioral (Action tendencies)
        </p>
      `
        },
        {
            heading: "Functions of Attitude",
            content: `
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Utilitarian Function:</strong> Helps us maximize rewards and minimize punishments.</li>
          <li><strong>Knowledge Function:</strong> Helps us organize and interpret information (e.g., stereotyping makes the world seem simpler).</li>
          <li><strong>Ego-Defensive Function:</strong> Protects our self-esteem (e.g., blaming others for failure).</li>
          <li><strong>Value-Expressive Function:</strong> Allows us to express our core values and identity.</li>
        </ul>
      `
        },
        {
            heading: "Social Influence and Persuasion",
            content: `
        <p class="mb-2">Techniques to change attitude:</p>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Cognitive Dissonance:</strong> Creating discomfort by pointing out hypocrisy.</li>
          <li><strong>Social Proof:</strong> "Everyone is doing it."</li>
          <li><strong>Authority:</strong> Using experts or leaders to endorse a view.</li>
        </ul>
      `
        }
    ],
    summary: "Detailed analysis of Attitude, its formation, functions, and relation to behavior.",
    source: "Psychology NCERT / Second ARC Report",
    tags: ["Attitude", "Behavior", "Social Influence"]
};
