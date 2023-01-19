import React from 'react';
import { Shadow } from 'react-native-shadow-2';

import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { Icon } from '@src/components/Icon';
import { Box } from '@src/components/Layout/Box';
import { Stack } from '@src/components/Layout/Stack';
import { Text } from '@src/components/Text';
import { useHeaderHeight } from '@src/hooks/useHeaderHeight';
import { useTheme } from '@src/hooks/useTheme';
import { Routes } from '@src/navigation/routes';
import { Spacing } from '@src/utils/Spacing';

export const Header = ({
  options,
  navigation,
}: NativeStackHeaderProps): React.ReactNode => {
  const { colors: themeColors } = useTheme();

  const title =
    typeof options.headerTitle === 'string'
      ? options.headerTitle
      : options.title || '';

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.navigate(Routes.Home);
  };

  const canGoBack = navigation.canGoBack();

  const { headerHeight, headerPaddingTop, headerPaddingBottom } =
    useHeaderHeight(options.presentation !== 'modal');

  return (
    <Shadow
      stretch
      distance={3}
      sides={{
        start: false,
        end: false,
        top: false,
        bottom: true,
      }}
    >
      <Stack
        pt={headerPaddingTop}
        pb={headerPaddingBottom}
        ph={Spacing.large}
        h={headerHeight}
        direction="row"
        spacing={Spacing.large}
        style={[
          { backgroundColor: themeColors.backgroundPrimary },
          options.headerStyle,
        ]}
      >
        <Box
          minW={Spacing['xx-large']}
          justify="center"
          pt={Spacing['xx-small']}
        >
          {options.headerBackVisible !== false && canGoBack ? (
            <Icon name="ArrowBack" onPress={goBack} size={24} />
          ) : null}
        </Box>

        <Box flex={1} justify="center">
          <Text type="medium" size={18} numberOfLines={1}>
            {title}
          </Text>
        </Box>

        <Box minW={Spacing['xx-large']} justify="center">
          {options.headerRight?.({ canGoBack })}
        </Box>
      </Stack>
    </Shadow>
  );
};
