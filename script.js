let addTaskBtn = document.getElementById('addTaskBtn')

let ul = document.getElementById('taskList');

let taskName = document.getElementById('taskName')

let taskType = document.getElementById('taskType')


addTaskBtn.addEventListener('click', function() {
   
   let newTask = taskType[taskType.options.selectedIndex].innerText

   if(newTask == 'Selecionar tipo') {
      alert('Nenhum tipo de tarefa selecionado')
   } else if (!taskName.value) {
      alert('O nome da tarefa não foi inserido')
   } else {

      let li = document.createElement('li')
      let figure = document.createElement('figure')
      let img = document.createElement('img')
      let paragraph = document.createElement('p')
      let span = document.createElement('span')
      let trashIcon = document.createElement('img')
      let figure2 = document.createElement('figure')
      
      img.classList.add('taskImg')
      li.classList.add('taskItem')
      span.classList.add('taskWrapper')
      trashIcon.classList.add('trashIcon')
      figure2.classList.add('trashWrapper')

      trashIcon.alt = 'trash icon'
      trashIcon.src = './img/trash.png'
      img.alt = newTask
      paragraph.innerText = taskName.value
      taskName.value = ''

      if(newTask == 'Estudo') {
         img.src = './img/green.png'
      } else if (newTask == 'Trabalho') {
         img.src = './img/mug.png'
      } else if (newTask == 'Lazer') {
         img.src = './img/orange.png'
      } else {
         img.src = './img/blue.png'
      }

      figure.appendChild(img)
      span.appendChild(figure)
      span.appendChild(paragraph)
      li.appendChild(span)
      figure2.appendChild(trashIcon)
      li.appendChild(figure2)
      ul.appendChild(li)

      trashIcon.addEventListener('click', function(event) {
         event.path[2].remove()
      })
   }
})