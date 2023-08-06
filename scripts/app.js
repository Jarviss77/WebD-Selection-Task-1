fetch('https://test-data-gules.vercel.app/data.json')
    .then(response => response.json())
    .then(APIdata => {


        const accordianContainer = document.getElementById('accordian-full');
        

        APIdata.data.forEach(element => {

            
            const accordianHeading = document.createElement('button');
            accordianHeading.textContent = element.title;
            accordianContainer.appendChild(accordianHeading)
            const questionList = document.createElement('div');
            accordianContainer.appendChild(questionList)
            accordianHeading.classList.add('accordian');
            questionList.classList.add('panel');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            accordianHeading.appendChild(checkbox);
            
           
            
            element.ques.forEach(question => {
                const listItem = document.createElement('ul');
                listItem.textContent = question.title;
                questionList.appendChild(listItem);
                const list = document.createElement('ul');
                let p1 = "Here you go";
                let p2 = "Here you go";
                let yt = "Here you go";
                if(question.p1_link == null){
                    p1 = "No link available";
                }
                if(question.p2_link == null){
                    p2 = "No link available";
                }
                if(question.yt_link == null){
                    yt = "No link available";
                }
                list.innerHTML = `<li>Link 1: <a href = "${question.p1_link}">${p1}</a></li>
                <li>Link 2: <a href = "${question.p1_link}">${p2}</a></li>
                <li>Video: <a href = "${question.yt_link}">${yt}</a></li>
                <li>Tags:${question.tags}</li>`;
                listItem.appendChild(list);
            });

        });
    })
    .catch(error => {
        console.error(error);
    });

