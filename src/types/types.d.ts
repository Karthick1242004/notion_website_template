// types.d.ts
interface ButtonData {
    text: string;
    variant: 'primary' | 'secondary';
  }
  
  interface Section {
    title: string;
    subtitle: string;
    buttons?: ButtonData[];
    button?: ButtonData;
    image: {
      url: string;
      alt: string;
    };
  }
  
  interface Content {
    hero: Section;
    secondBrain: Section;
    templates: Section;
    minimalist: Section;
  }
  
  export default Content;
  