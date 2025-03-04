'use client';
import { SquareUserRound, Pencil } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SheetWrapper from './sheets/SheetWrapper';
import { SHEETS } from '@/lib/constant/profile.constant';
import ProfileEmptyContainers from './emptycontainers/ProfileEmptyContainers';
import AboutMeForm from './forms/ReadMeForm';

const ProfileAboutMe = ({
  aboutMe,
  isOwner,
}: {
  aboutMe: string;
  isOwner: boolean;
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const hasAboutMe = !!aboutMe?.trim();

  // Improved title logic
  const sheetTitle = hasAboutMe 
    ? SHEETS.aboutMe.title.replace('Add', 'Edit')
    : SHEETS.aboutMe.title;

  const handleClose = () => setIsSheetOpen(false);
  const handleOpen = () => setIsSheetOpen(true);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-2xl">About Me</h3>
        {isOwner && (
          <Button
            variant="outline"
            className="px-3 py-2 rounded-sm text-slate-500 dark:text-slate-400 flex gap-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
            onClick={handleOpen}
            aria-label={hasAboutMe ? "Edit about me" : "Add about me"}
          >
            <Pencil size={16} aria-hidden="true" />
            <span>{hasAboutMe ? 'Edit' : 'Add'}</span>
          </Button>
        )}
      </div>

      {!hasAboutMe ? (
        <ProfileEmptyContainers
          isOwner={isOwner}
          buttonText="Add About Me"
          handleClick={handleOpen}
          title={isOwner ? 'You haven’t added an about me yet' : 'No About Me added.'}
          description={isOwner ? 'Share a brief introduction to let companies know who you are.' : undefined}
          Icon={SquareUserRound}
        />
      ) : (
        <div className="rounded-2xl p-6 dark:bg-slate-900 bg-slate-100">
          <p className="text-base leading-normal whitespace-pre-line">{aboutMe}</p>
        </div>
      )}

      {isOwner && (
        <SheetWrapper
          isOpen={isSheetOpen}
          handleClose={handleClose}
          title={sheetTitle}
          description={SHEETS.aboutMe.description}
        >
          <AboutMeForm handleClose={handleClose} aboutMe={aboutMe} />
        </SheetWrapper>
      )}
    </>
  );
};

export default ProfileAboutMe;