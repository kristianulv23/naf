import React from "react";

const MainPage = () => {
  return (
    <section className="min-h-screen p-4 pt-32">
      <section className="grid md:grid-cols-2 gap-6 lg:gap-20 md:gap-20 mb-6">
        <div>
          <h1 className="text-3xl mb-6">Lorem ipsum</h1>
          <p className="pb-4">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet.
          </p>
          <p className="pb-4">
            Mauris augue massa, ultricies non ligula. Suspendisse imperdie
            tVivamus luctus eros aliquet convallis ultricies. Mauris augue
            massa, ultricies non ligula. Suspendisse imperdiet.
          </p>
          <ul className="list-disc ml-10">
            <li>Sed consectetur</li>
            <li>Convallis ultricies</li>
            <li>Pharetra mattis</li>
          </ul>
        </div>
        <div>
          <figure>
            <img
              src="https://lavangenif.no/wp-content/uploads/2019/11/placeholder.png"
              alt="placeholder"
            />
            <figcaption className="text-xs text-gray-600 mt-1">
              luctus eros aliquet convallis
            </figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
};

export default MainPage;
