"use server"


   export function createChannel(formData: FormData) {
    
    const name = formData.get('name') as string

    // if (!name.length) {
    //   return {
    //     error: "Name is required"
    //   }
    // }

    console.log("name", name)
    // Update data
    // Revalidate cache
  }
