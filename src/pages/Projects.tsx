import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';

function Projects() {
  return (
    <div className="w-100">
      <header className="logo-header">
        <Navbar />
      </header>
      <main className="flex flex-row flex-wrap justify-center gap-4 p-4">
        <ImageCard
          imageUrl="https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg"
          imageAlt="Placeholder Image"
          title="Project Title"
          description="This is a description of the project."
          tags={['tag1', 'tag2', 'tag3']}
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
          imageAlt="Placeholder Image"
          title="Project Title"
          description="This is a description of the project."
          tags={['tag1', 'tag2', 'tag3']}
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
          imageAlt="Placeholder Image"
          title="Project Title"
          description="This is a description of the project."
          tags={['tag1', 'tag2', 'tag3']}
        />
        <br />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg"
          imageAlt="Placeholder Image"
          title="Project Title"
          description="This is a description of the project."
          tags={['tag1', 'tag2', 'tag3']}
        />
        <ImageCard
          imageUrl="https://images.unsplash.com/photo-1613545325268-9265e1609167?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Placeholder Image"
          title="Project Title"
          description="This is a description of the project."
          tags={['tag1', 'tag2', 'tag3']}
        />
        <ImageCard
          imageUrl="https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Placeholder Image"
          title="Project Title"
          description="This is a description of the project."
          tags={['tag1', 'tag2', 'tag3']}
        />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Projects;
