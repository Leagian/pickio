import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { Post } from '@/types/post';

export const PostInput = () => {
  const [content, setContent] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [createPost, { loading, error }] = useMutation<Post>(
    CREATE_POST_MUTATION,
    {
      refetchQueries: [{ query: GET_ALL_POSTS }],
    }
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createPost({
        variables: {
          data: {
            content,
            images: selectedImages,
            location: null,
          },
        },
      });
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
    <form onSubmit={handleFormSubmit}>
      <input
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
              if (e.target.files.length > 3) {
                alert('You can only select up to 3 images.');
                return;
              }
              setSelectedImages(Array.from(e.target.files));
            }}
          />
          <button type='submit'>Post</button>
        </div>
      )}
    </form>
  );
};
