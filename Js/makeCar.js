const form = document.querySelector('form'); 

    async function createPost(e){
        e.preventDefault();
        //create an object for inputs
        const input = {
            model: form.model.value,
            features: form.features.value,
            saves: 0
        }

        await fetch ('http://localhost:3000/cars',{ //pass a second object as argument in the fetch
            method: 'POST',
            body: JSON.stringify(input),
            headers: {'Content-Type' : 'application/json'}
        })

        window.location.replace('./index.html');
    }


form.addEventListener('submit', createPost);