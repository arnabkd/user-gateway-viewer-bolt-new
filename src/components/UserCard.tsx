import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { User } from '../types';
import toast from 'react-hot-toast';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(user.email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${!user.isActive ? 'opacity-75' : ''}`}>
      <div className="flex items-center space-x-4">
        <img
          src={user.photoUrl}
          alt={user.displayName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{user.displayName}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-sm text-gray-600">{user.email}</p>
            <button
              onClick={copyEmail}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Copy email"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">{user.jobTitle}</p>
          {!user.isActive && (
            <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mt-2">
              Inactive
            </span>
          )}
        </div>
      </div>
    </div>
  );
};