// import React, { forwardRef, useState } from "react";
// import Template1 from "../templates/Template1";
// import Template2 from "../templates/Template2";
// import Template3 from "../templates/Template3";
// import Template4 from "../templates/Template4";
// import Template5 from "../templates/Template5";
// import Template6 from "../templates/Template6";
// import Template7 from "../templates/Template7";
// import Template8 from "../templates/Template8";
// import Template9 from "../templates/Template9";
// import Template10 from "../templates/Template10";
// import Template13 from "../templates/Template13";
// import Template14 from "../templates/Template14";
// import Template15 from "../templates/Template15";

// const TemplateComponent = forwardRef(
//   (
//     {
//       image,
//       data,
//       selectedTemplate,
//       selectedFont,
//       textSize,
//       setBoxBgColor,
//       sectionSpacing,
//       paragraphSpacing,
//       lineSpacing,
//       boxBgColor,
//       isPreviewScreen,
//       predefinedText,
//       handleImageUpload,
//       skillsfromapi,
//       id,
//     },
//     ref
//   ) => {
//     console.log(image, "=====");

//     const getSizeClass = (value) => {
//       if (value <= 1) return "small";
//       if (value === 2) return "medium";
//       return "large";
//     };

//     let SelectedTemplateComponent;
//     switch (selectedTemplate) {
//       case "Template1":
//         SelectedTemplateComponent = Template1;
//         break;
//       case "Template2":
//         SelectedTemplateComponent = Template2;
//         break;
//       case "Template3":
//         SelectedTemplateComponent = Template3;
//         break;
//       case "Template4":
//         SelectedTemplateComponent = Template4;
//         break;
//       case "Template5":
//         SelectedTemplateComponent = Template5;
//         break;
//       case "Template6":
//         SelectedTemplateComponent = Template6;
//         break;
//       case "Template7":
//         SelectedTemplateComponent = Template7;
//         break;
//       case "Template8":
//         SelectedTemplateComponent = Template8;
//         break;
//       case "Template9":
//         SelectedTemplateComponent = Template9;
//         break;
//       case "Template10":
//         SelectedTemplateComponent = Template10;
//         break;
//       case "Template13":
//         SelectedTemplateComponent = Template13;
//         break;
//       case "Template14":
//         SelectedTemplateComponent = Template14;
//         break;
//       case "Template15":
//         SelectedTemplateComponent = Template15;
//         break;
//       default:
//         SelectedTemplateComponent = Template1;
//     }

//     return (
//       <div ref={ref} className="bg-white  ">
//         <div className=" ">
//           <SelectedTemplateComponent
//             data={data}
//             predefinedText={predefinedText}
//             boxBgColor={boxBgColor}
//             setBoxBgColor={setBoxBgColor}
//             font={selectedFont}
//             textSize={getSizeClass(textSize)}
//             sectionSpacing={getSizeClass(sectionSpacing)}
//             paragraphSpacing={getSizeClass(paragraphSpacing)}
//             lineSpacing={lineSpacing}
//             isPreviewScreen={isPreviewScreen}
//             isTemplate1Previewing={isPreviewScreen}
//             image={image}
//             handleImageUpload={handleImageUpload}
//             skillsfromapi={skillsfromapi}
//             id={id}
//           />
//         </div>
//       </div>
//     );
//   }
// );

// export default TemplateComponent;


import React, { forwardRef, useState } from 'react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';
import Template8 from '../templates/Template8';
import Template9 from '../templates/Template9';
import Template10 from '../templates/Template10';
import Template13 from '../templates/Template13';
import Template14 from '../templates/Template14';
import Template15 from '../templates/Template15';

const TemplateComponent = forwardRef(({
  image,
  data,
  selectedTemplate,
  selectedFont,
  textSize,
  setBoxBgColor,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  boxBgColor,
  isPreviewScreen,
  predefinedText,
  handleImageUpload,
  skillsfromapi,
  id,
  reorderedSections, // Add this prop to receive reordered sections
}, ref) => {

  const getSizeClass = (value) => {
    if (value <= 1) return 'small';
    if (value === 2) return 'medium';
    return 'large';
  };

  let SelectedTemplateComponent;
  switch (selectedTemplate) {
    case 'Template1':
      SelectedTemplateComponent = Template1;
      break;
    case 'Template2':
      SelectedTemplateComponent = Template2;
      break;
    case 'Template3':
      SelectedTemplateComponent = Template3;
      break;
    case 'Template4':
      SelectedTemplateComponent = Template4;
      break;
    case 'Template5':
      SelectedTemplateComponent = Template5;
      break;
    case 'Template6':
      SelectedTemplateComponent = Template6;
      break;
    case 'Template7':
      SelectedTemplateComponent = Template7;
      break;
    case 'Template8':
      SelectedTemplateComponent = Template8;
      break;
    case 'Template9':
      SelectedTemplateComponent = Template9;
      break;
    case 'Template10':
      SelectedTemplateComponent = Template10;
      break;
    case 'Template13':
      SelectedTemplateComponent = Template13;
      break;
    case 'Template14':
      SelectedTemplateComponent = Template14;
      break;
    case 'Template15':
      SelectedTemplateComponent = Template15;
      break;
    default:
      SelectedTemplateComponent = Template1;
  }

  return (
    <div ref={ref} className='bg-white'>
      <div>
        <SelectedTemplateComponent
          data={data}
          predefinedText={predefinedText}
          boxBgColor={boxBgColor}
          setBoxBgColor={setBoxBgColor}
          font={selectedFont}
          textSize={getSizeClass(textSize)}
          sectionSpacing={getSizeClass(sectionSpacing)}
          paragraphSpacing={getSizeClass(paragraphSpacing)}
          lineSpacing={lineSpacing}
          isPreviewScreen={isPreviewScreen}
          isTemplate1Previewing={isPreviewScreen}
          image={image}
          handleImageUpload={handleImageUpload}
          skillsfromapi={skillsfromapi}
          id={id}
          sections={reorderedSections} // Pass reordered sections to the template
        />
      </div>
    </div>
  );
});

export default TemplateComponent;
