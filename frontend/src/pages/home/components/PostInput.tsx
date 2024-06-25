import { useState } from 'react';
import { useCreatePostMutation } from '../../../generated/graphql-types.ts';
import { GET_ALL_POSTS } from '../../../graphql/queries.ts';

export const PostInput = () => {
  const [content, setContent] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [createPost, { loading, error }] = useCreatePostMutation({
    refetchQueries: [{ query: GET_ALL_POSTS }],
  });

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    selectedImages.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });

    try {
      await createPost();
      setSelectedImages([]);
      setIsModalOpen(false);
    } catch (error) {
      // Gérer les erreurs ici
    }
  };

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <form
      className='flex flex-col items-center w-full md:w-1/2 mx-auto'
      onSubmit={handleFormSubmit}
    >
      <input
        className='text-white bg-gray-800 p-4 mt-5 w-2/3 h-20 rounded-2xl'
        type='text'
        placeholder='What do you recommend...'
        value={content}
        onClick={handleInputClick}
        onChange={(e) => setContent(e.target.value)}
      />
      {isModalOpen && (
        <div>
          <input
            type='file'
            multiple
            accept='image/*'
            onChange={(e) => {
              if (e.target.files) {
                if (e.target.files.length > 5) {
                  alert('You can only select up to 5 images.');
                  return;
                }
                setSelectedImages(Array.from(e.target.files));
              }
            }}
          />
          <button type='submit'>Post</button>
        </div>
      )}
    </form>
  );
};
