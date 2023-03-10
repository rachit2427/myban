import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import { Icon } from '@src/components/Icon';
import { Stack } from '@src/components/Layout/Stack';
import { Text } from '@src/components/Text';
import { Routes } from '@src/navigation/routes';
import { useAppNavigation } from '@src/types/navigation';
import { Spacing } from '@src/utils/Spacing';

export const AddNewItem: React.FC = () => {
  const navigation = useAppNavigation();

  const onPress = useCallback(() => {
    navigation.navigate(Routes.AddNew);
  }, [navigation]);

  return (
    <Pressable onPress={onPress}>
      <Stack spacing={Spacing['x-small']} direction="row" align="center">
        <Text size={14} color="brandSecondary" type="medium">
          Add New IBAN
        </Text>

        <Icon name="Plus" size={16} color="brandSecondary" />
      </Stack>
    </Pressable>
  );
};
