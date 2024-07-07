        let res_nm=document.createElement("h1")
        let cen_nm=document.createElement("center")
        cen_nm.append(res_nm)
        res_nm.innerText="Resume"
        document.body.append(cen_nm)

        // hr line
        let hr_line=document.createElement("hr")
        hr_line.style.height="3px"
        hr_line.style.background="black"
        document.body.append(hr_line)

        //Objective page
        let sub_head=document.createElement("h2")
        sub_head.innerText="Objective:"
        document.body.append(sub_head)

        let para_1=document.createElement("p")
        para_1.innerText="To secure a challenging position in web development where I can utilize my skills in HTML CSS and JavaScript to contribute effectively to organizational success and growth. "
        document.body.append(para_1)

        // Skills page
        let skill=document.createElement("h2")
        skill.innerText=" Skills :"
        document.body.append(skill)

        let skill_1=document.createElement("p")
        skill_1.innerText="• Proficient: HTML5, CSS3, JavaScript "
        document.body.append(skill_1)

        let skill_2=document.createElement("p")
        skill_2.innerText="• Version Control: GitHub  "
        document.body.append(skill_2)

        let skill_3=document.createElement("p")
        skill_3.innerText="• Responsive Design Principles "
        document.body.append(skill_3)

        //Projects page

        let project=document.createElement("h2")
        project.innerText="Projects :"
        document.body.append(project)


        let project_1=document.createElement("h3")
        project_1.innerText="1. E-Book Project"
        document.body.append(project_1)



        let point_1=document.createElement("p")
        point_1.innerText="• Developed a modern user interface using HTML5, CSS3, and JavaScript."
        document.body.append(point_1)

        let point_2=document.createElement("p")
        point_2.innerText="• Implemented responsive design for optimal user experience across devices. "
        document.body.append(point_2)



