# Manual Test Plan for CV Web App

**Location:** `/docs/TEST_PLAN.md`  

## Overview

This document defines detailed, manual test cases and edge-case scenarios for the CV Web App. Each test case includes:

- **TC/EC ID**: Unique identifier (`TC` = normal test case, `EC` = edge case)  
- **Area**: Screen or feature under test  
- **Precondition**: Setup before executing steps  
- **Steps**: Step-by-step instructions  
- **Expected Result**: What should happen  

---

## Environment

- Browsers: Chrome, Firefox, Safari, Edge (latest)  
- Viewports:  
  - Desktop (≥900 px)  
  - Tablet (700–900 px)  
  - Mobile (≤700 px)  
- OS: Windows, macOS, iOS, Android  
- Server: `npm start` on localhost
- Deploy on Netlify: https://hieu-cv.netlify.app/

---
## Test Cases

|  ID  | Area / Screen          | Preconditions  | Steps                                       | Expected Result                            | Actual Result                         |
| :--: | :--------------------- | :------------- | :------------------------------------------ | :----------------------------------------- | :------------------------------------ |
| TC01 | Page Load              | Dev server on  | 1. Navigate to `http://localhost:3000/`     | Page loads                                 | Page loads                            |
|      |                        |                |                                             |                                            |                                       |
| TC02 | Overall look comparing | PDF version +  | 1. Open 2 versions and have an overall look | Ensure the web version displays as closely | The web version displays about 80% of |
|      | to PDF version         | web version    |                                             | as possible to the layout and appearance   | layout and appearance                 |
|      |                        |                |                                             | of the PDF version                         |                                       |
|      |                        |                |                                             |                                            |                                       |
| TC03 | Header (desktop)       | Viewport       | 1. Observe the header: decor-rectangle,     | Ensure web version's design match the PDF  | 1. decor-rectangle matchs the PDF     |
|      |                        | ≥ 900px        | image, name/title, decor-line               |                                            | 2. rectangle, bordered image          |
|      |                        |                |                                             |                                            | 3. decor-line looks a bit longer      |
|      |                        |                |                                             |                                            | than the PDF version                  |
|      |                        |                |                                             |                                            | 4. name/title look a bit bigger &     |
|      |                        |                |                                             |                                            | the font family is different          |
|      |                        |                |                                             |                                            |                                       |
| TC04 | Header (tablet)        | 700px <        | 1. Observe the header: decor-rectangle,     | Ensure the responsive in tablet mode       | 1. decor-rectangle stays fit with     |
|      |                        | viewport<900px | image, name/title, decor-line               |                                            | the viewport when resize              |
|      |                        |                |                                             |                                            | 2. image resizes with the viewport,   |
|      |                        |                |                                             |                                            | become oval when the viewport is      |
|      |                        |                |                                             |                                            | near 700px                            |
|      |                        |                |                                             |                                            | 3. decor-line resizes with the        |
|      |                        |                |                                             |                                            | viewport                              |
|      |                        |                |                                             |                                            | 4. name/title resizes with the        |
|      |                        |                |                                             |                                            | viewport                              |
|      |                        |                |                                             |                                            |                                       |
| TC05 | Header (mobile)        | Viewport       | 1. Observe the header: decor-regtangle,     | Ensure the responsive in mobile mode       | 1. decor-rectangle resizes with the   |
|      |                        | ≤ 700px        | image, name/title, decor-line               |                                            | viewport                              |
|      |                        |                |                                             |                                            | 2. image now is in center & having    |
|      |                        |                |                                             |                                            | same size when in desktop viewport    |
|      |                        |                |                                             |                                            | 3. decor-line now is in center &      |
|      |                        |                |                                             |                                            | resize with the viewport              |
|      |                        |                |                                             |                                            | 4. name-last drops into new line &    |
|      |                        |                |                                             |                                            | both resize with the viewport         |
|      |                        |                |                                             |                                            |                                       |
| TC06 | Profile (desktop)      | Viewport       | 1. Observe the profile                      | Ensure web version's design match the PDF  | 1. The distance between profile       |
|      |                        | ≥ 900px        |                                             |                                            | section-label & image is further than |
|      |                        |                |                                             |                                            | the pdf                               |
|      |                        |                |                                             |                                            | 2. Font size/family are different     |
|      |                        |                |                                             |                                            | 3. decor-rectangle is bigger than the |
|      |                        |                |                                             |                                            | one of the pdf version                |
|      |                        |                |                                             |                                            | 4. The gap between intro and contact  |
|      |                        |                |                                             |                                            | is smaller than the one of the pdf    |
|      |                        |                |                                             |                                            |                                       |
| TC07 | Profile (tablet)       | 700px <        | 1. Observe the profile                      | Ensure the responsive in tablet mode       | The section resizes with the viewport |
|      |                        | viewport<900px |                                             |                                            |                                       |
|      |                        |                |                                             |                                            |                                       |
| TC08 | Profile (mobile)       | Viewport       | 1. Observe the profile                      | Ensure the responsive in mobile mode       | The section resizes with the viewport |
|      |                        | ≤ 700px        |                                             |                                            |                                       |
|      |                        |                |                                             |                                            |                                       |
| TC09 | Languages/Software/    | Viewport       | 1. Observe the languages section            | Ensure web version's design match the PDF  | 1. The font famlily is different      |
|      | Hobbies (desktop)      | ≥ 900px        | 2. Observe the software section             |                                            | 2. The progress bar color is a bit    |
|      |                        |                | 3. Observe the hobbies section              |                                            | different                             |
|      |                        |                |                                             |                                            | 3. decor-rectangle is a bit bigger    |
|      |                        |                |                                             |                                            | than the one of the pdf               |
|      |                        |                |                                             |                                            | 4. No padding left/right in           |
|      |                        |                |                                             |                                            | languages/software details comparing  |
|      |                        |                |                                             |                                            | to the pdf                            |
|      |                        |                |                                             |                                            | 5. Hobbies's icons are smaller &      |
|      |                        |                |                                             |                                            | smaller gap between them than the pdf |
|      |                        |                |                                             |                                            |                                       |
| TC10 | Languages/Software/    | 700px <        | 1. Observe the languages section            | Ensure the responsive in tablet mode       | 1. The sections resize with the       |
|      | Hobbies (tablet)       | viewport<900px | 2. Observe the software section             |                                            | viewport                              |
|      |                        |                | 3. Observe the hobbies section              |                                            | 2. When the viewport is near 700px,   |
|      |                        |                |                                             |                                            | the language/software names and the   |
|      |                        |                |                                             |                                            | progress bar resize in imbalance      |
|      |                        |                |                                             |                                            | way                                   |
|      |                        |                |                                             |                                            |                                       |
| TC11 | Languages/Software/    | Viewport       | 1. Observe the languages section            | Ensure the responsive in mobile mode       | The sections resize with the viewport |
|      | Hobbies (mobile)       | ≤ 700px        | 2. Observe the software section             |                                            | & are center, also be re-ordered      |
|      |                        |                | 3. Observe the hobbies section              |                                            | into the bottom                       |
|      |                        |                |                                             |                                            |                                       |
| TC12 | Education/Experience   | Viewport       | 1. Observe the education section            | Ensure web version's design match the PDF  | 1. font-size/family are different     |
|      | (desktop)              | ≥ 900px        | 2. Observe the experience section           |                                            | 2. the gap between degree & program   |
|      |                        |                |                                             |                                            | is bigger than the one of pdf         |
|      |                        |                |                                             |                                            |                                       |
| TC13 | Education/Experience   | 700px <        | 1. Observe the education section            | Ensure the responsive in tablet mode       | 1. The sections resize with the       |
|      | (tablet)               | viewport<900px | 2. Observe the experience section           |                                            | viewport, but the left column's       |
|      |                        |                |                                             |                                            | contents are shrink out &             |
|      |                        |                |                                             |                                            | imbalance with the layout             |
|      |                        |                |                                             |                                            | 2. The sections are now re-orderred   |
|      |                        |                |                                             |                                            | after profile                         |
|      |                        |                |                                             |                                            |                                       |
| TC14 | Education/Experience   | Viewport       | 1. Observe the education section            | Ensure the responsive in mobile mode       | Same problems in tablet mode          |
|      | (mobile)               | ≤ 700px        | 2. Observe the experience section           |                                            |                                       |
|      |                        |                |                                             |                                            |                                       |
| TC15 | Skills/Projects/Footer | Viewport       | 1. Observe the skills section               | Ensure web version's design match the PDF  | 1. Font family/size are different     |
|      | (desktop)              | ≥ 900px        | 2. Observe the projects section             |                                            | 2. decor-rectangle is a bit bigger    |
|      |                        |                | 3. Observe the footer section               |                                            | than the one of the pdf               |
|      |                        |                |                                             |                                            | 3. No padding-right with the right    |
|      |                        |                |                                             |                                            | side of the viewport in the projects  |
|      |                        |                |                                             |                                            | details                               |
|      |                        |                |                                             |                                            | 3. Footer matchs the PDF design       |
|      |                        |                |                                             |                                            |                                       |
| TC16 | Skills/Projects/Footer | 700px <        | 1. Observe the skills section               | Ensure the responsive in tablet mode       | 1. The contents of projects section   |
|      | (tablet)               | viewport<900px | 2. Observe the projects section             |                                            | resizes in imbalance way              |
|      |                        |                | 3. Observe the footer section               |                                            | 2. Footer resizes with the viewport   |
|      |                        |                |                                             |                                            |                                       |
| TC17 | Skills/Projects/Footer | Viewport       | 1. Observe the skills section               | Ensure the responsive in mobile mode       | 1. The section-label is in the left   |
|      | (mobile)               | ≤ 700px        | 2. Observe the projects section             |                                            | when 600px<viewport≤700px, then being |
|      |                        |                | 3. Observe the footer section               |                                            | centered with the decor-rectangle     |
|      |                        |                |                                             |                                            | when viewport<600px                   |
|      |                        |                |                                             |                                            | 2. Skills & project sections are      |
|      |                        |                |                                             |                                            | re-ordered after the experience       |
|      |                        |                |                                             |                                            | section                               |
|      |                        |                |                                             |                                            | 3. The contents of projects section   |
|      |                        |                |                                             |                                            | resizes in imbalance way              |
|      |                        |                |                                             |                                            | 4. Footer resizes with the viewport   |

---

## Edge Cases

|  ID  | Scenario              | Preconditions | Steps                   | Expected Result                         | Actual                                                    |
| :--: | :-------------------- | :------------ | :---------------------- | :-------------------------------------- | :-------------------------------------------------------- |
| EC01 | Very narrow viewport  | ≤350 px width | 1. Resize to 280 px     | All content legible                     | 1. When in 350px, the web displays quite decent, although |
|      |                       |               |                         |                                         | the problems of education/experience/projects             |
|      |                       |               |                         |                                         | 2. When resize to 280px, header/footer are now unstabe    |
|      |                       |               |                         |                                         |                                                           |
| EC02 | Missing profile image | Remove `img`  | 1. Reload page          | Alt text shows or placeholder displayed | 1. Delete `img`: no placeholder displayed                 |
|      |                       |               |                         |                                         | 2. Change `img`: Alt text shows                           |
|      |                       |               |                         |                                         |                                                           |



