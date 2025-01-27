import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ArtworkCollection = () => {
  const artworks = [
    {
      id: 1,
      title: "Architectural woodwork and paneling",
      artist: "George A. Schastey & Co.",
      year: "1881–82",
      description: "Interior woodwork from Arabella Worsham's New York City townhouse",
      sourceUrl: "https://www.metmuseum.org/art/collection/search/20415"
    }
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Open Source Art Collection
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {artworks.map((artwork) => (
          <Card key={artwork.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{artwork.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Button 
                  variant="outline"
                  onClick={() => window.open(artwork.sourceUrl, '_blank')}
                >
                  View Source
                </Button>
              </div>
              <div className="space-y-2">
                {artwork.artist && <p className="font-medium">{artwork.artist}</p>}
                {artwork.year && <p className="text-gray-600">{artwork.year}</p>}
                {artwork.description && <p className="text-sm">{artwork.description}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArtworkCollection;
